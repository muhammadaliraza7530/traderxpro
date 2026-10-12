const stakingModal = document.getElementById('staking-modal');
const stakingForm = document.getElementById('staking-form');
const amountInput = document.getElementById('stake-amount-input');
const termsCheckbox = document.getElementById('stake-terms-checkbox');
const confirmButton = document.getElementById('confirm-stake-btn');
const amountError = document.getElementById('stake-amount-error');
const feedback = document.getElementById('staking-feedback');
const durationInput = document.getElementById('stake-duration-id');
const walletInput = document.getElementById('stake-wallet-input');
const balanceLabel = document.getElementById('user-usdt-balance');
const totalStakedDisplay = document.getElementById('total-staked');
const activeStakesContainer = document.getElementById('active-stakes-container');
const activeStakesCount = document.getElementById('active-stakes-count');
const stakingToast = document.getElementById('staking-toast');
let selectedPlan = null;
let previouslyFocusedElement = null;
let demoStakeSequence = 101;
let toastTimeout = null;
let countdownInterval = null;
const activeStakes = [];

function getConfiguredMaximum() {
  const configuredValue = amountInput.dataset.configuredMax ?? amountInput.getAttribute('max');
  if (configuredValue === null || configuredValue === '') return Infinity;

  const configuredMaximum = Number(configuredValue);
  return Number.isFinite(configuredMaximum) ? configuredMaximum : Infinity;
}

function formatMaturityDate(durationDays) {
  const maturityDate = new Date();
  maturityDate.setDate(maturityDate.getDate() + durationDays);
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  }).format(maturityDate);
}

function validateStakeAmount() {
  const amount = Number(amountInput.value);
  const minimum = Number(selectedPlan?.minAmount ?? 0);
  const configuredMaximum = getConfiguredMaximum();
  const walletOption = walletInput?.selectedOptions[0];
  const walletBalance = Number(walletOption?.dataset.balance ?? Infinity);
  const walletValid = !walletInput || walletInput.value !== '';
  const validAmount = Number.isFinite(amount) && amount > 0 && amount >= minimum &&
    amount <= configuredMaximum && amount <= walletBalance && walletValid;

  if (validAmount) {
    amountError.textContent = '';
  } else if (!walletValid) {
    amountError.textContent = 'Select a wallet to continue.';
  } else if (Number.isFinite(amount) && amount > walletBalance) {
    amountError.textContent = 'Amount exceeds the selected wallet balance.';
  } else if (Number.isFinite(configuredMaximum) && amount > configuredMaximum) {
    amountError.textContent = `Maximum amount is ${configuredMaximum.toFixed(2)} USDT.`;
  } else {
    amountError.textContent = `Enter at least ${minimum.toFixed(2)} USDT.`;
  }
  amountError.classList.toggle('hidden', validAmount || amountInput.value === '');
  confirmButton.disabled = !validAmount || !termsCheckbox.checked;
  return validAmount;
}

function openStakingModal(planButton) {
  selectedPlan = {
    id: planButton.dataset.planId,
    name: planButton.dataset.planName,
    currency: planButton.dataset.currency || stakingModal.dataset.currency || 'USDT',
    defaultAmount: Number(planButton.dataset.defaultAmount ?? 0),
    durationDays: Number(planButton.dataset.durationDays),
    rewardRule: planButton.dataset.returnRule,
    fee: Number(planButton.dataset.fee ?? 0),
    minAmount: Number(planButton.dataset.minAmount ?? 0)
  };

  document.getElementById('stake-plan-name').textContent = selectedPlan.name;
  document.getElementById('stake-duration').textContent = `${selectedPlan.durationDays} Days`;
  document.getElementById('stake-reward-rule').textContent = selectedPlan.rewardRule;
  document.getElementById('stake-maturity-date').textContent = formatMaturityDate(selectedPlan.durationDays);
  document.getElementById('stake-fee').textContent = `${selectedPlan.fee.toFixed(2)} ${selectedPlan.currency} (0%)`;
  document.getElementById('stake-amount-currency').textContent = selectedPlan.currency;
  if (durationInput) durationInput.value = selectedPlan.id;
  amountInput.min = selectedPlan.minAmount;
  const configuredMaximum = getConfiguredMaximum();
  const defaultAmount = Math.max(selectedPlan.defaultAmount || 100, selectedPlan.minAmount);
  amountInput.value = (Number.isFinite(configuredMaximum) && configuredMaximum > 0
    ? Math.min(defaultAmount, configuredMaximum)
    : defaultAmount).toFixed(2);
  if (walletInput) {
    walletInput.value = '';
    balanceLabel.textContent = 'Select wallet';
  }
  termsCheckbox.checked = false;
  amountError.classList.add('hidden');
  amountError.textContent = '';
  feedback.textContent = '';
  validateStakeAmount();

  previouslyFocusedElement = document.activeElement;
  stakingModal.classList.remove('hidden');
  stakingModal.classList.add('flex');
  document.body.classList.add('overflow-hidden');
  document.getElementById('close-staking-modal').focus();
}

function closeStakingModal() {
  stakingModal.classList.add('hidden');
  stakingModal.classList.remove('flex');
  document.body.classList.remove('overflow-hidden');
  feedback.textContent = '';
  previouslyFocusedElement?.focus();
}

document.querySelectorAll('.staking-plan-card').forEach((planCard) => {
  planCard.querySelector('.stake-now-btn')?.addEventListener('click', () => openStakingModal(planCard));
});

const planCards = [...document.querySelectorAll('.staking-plan-card')];
const filterButtons = [...document.querySelectorAll('[data-staking-filter]')];
const emptyFilterResults = document.getElementById('empty-filter-results');

filterButtons.forEach((filterButton) => {
  filterButton.addEventListener('click', () => {
    const selectedFilter = filterButton.dataset.stakingFilter;
    let visiblePlans = 0;

    filterButtons.forEach((button) => {
      const active = button === filterButton;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', String(active));
    });

    planCards.forEach((planCard) => {
      const categories = (planCard.dataset.categories || '').split(/\s+/);
      const visible = selectedFilter === 'all' || categories.includes(selectedFilter);
      planCard.hidden = !visible;
      if (visible) visiblePlans += 1;
    });

    if (emptyFilterResults) emptyFilterResults.hidden = visiblePlans > 0;
  });
});

document.getElementById('close-staking-modal').addEventListener('click', closeStakingModal);
document.getElementById('cancel-stake-btn').addEventListener('click', closeStakingModal);
stakingModal.addEventListener('click', (event) => {
  if (event.target === stakingModal) closeStakingModal();
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !stakingModal.classList.contains('hidden')) closeStakingModal();
});
amountInput.addEventListener('input', validateStakeAmount);
termsCheckbox.addEventListener('change', validateStakeAmount);
walletInput?.addEventListener('change', () => {
  const walletOption = walletInput.selectedOptions[0];
  const walletBalance = Number(walletOption?.dataset.balance ?? 0);
  const configuredMaximum = Number(amountInput.dataset.configuredMax ?? amountInput.max);

  if (walletOption?.value) {
    const currency = walletOption.dataset.currency || 'USDT';
    balanceLabel.textContent = `${new Intl.NumberFormat('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(walletBalance)} ${currency}`;
    amountInput.max = Math.min(configuredMaximum, walletBalance).toString();
  } else {
    balanceLabel.textContent = 'Select wallet';
    amountInput.max = amountInput.dataset.configuredMax ?? '';
  }
  validateStakeAmount();
});

function formatCountdown(remainingMilliseconds) {
  const remainingSeconds = Math.max(0, Math.floor(remainingMilliseconds / 1000));
  const days = Math.floor(remainingSeconds / 86400);
  const hours = Math.floor((remainingSeconds % 86400) / 3600);
  const minutes = Math.floor((remainingSeconds % 3600) / 60);
  const seconds = remainingSeconds % 60;
  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

function updateActiveStakeTimers() {
  const currentTime = Date.now();
  let currentCount = 0;

  activeStakes.forEach((stake) => {
    const remainingMilliseconds = stake.endTime - currentTime;
    const elapsedRatio = Math.min(1, Math.max(0, (currentTime - stake.startTime) / stake.durationMilliseconds));

    if (remainingMilliseconds > 0) {
      currentCount += 1;
      stake.countdownElement.textContent = formatCountdown(remainingMilliseconds);
      stake.statusElement.textContent = 'Unlocks in';
    } else {
      stake.countdownElement.textContent = 'Maturity reached';
      stake.statusElement.textContent = 'Complete';
    }

    stake.progressFill.style.width = `${elapsedRatio * 100}%`;
    stake.progressBar.setAttribute('aria-valuenow', String(Math.round(elapsedRatio * 100)));
  });

  activeStakesCount.textContent = `${currentCount} Active`;
}

function appendDemoPosition({ stakeId, planName, amount, currency, duration, durationDays, maturityDate }) {
  document.getElementById('active-stakes-empty')?.remove();

  const startTime = Date.now();
  const durationMilliseconds = durationDays * 24 * 60 * 60 * 1000;
  const stake = {
    stakeId,
    startTime,
    endTime: startTime + durationMilliseconds,
    durationMilliseconds
  };

  const card = document.createElement('article');
  card.className = 'demo-stake-card';

  const topRow = document.createElement('div');
  topRow.className = 'demo-stake-card__top';
  const plan = document.createElement('div');
  const heading = document.createElement('h3');
  heading.className = 'vault-name';
  heading.textContent = planName;
  const idLabel = document.createElement('p');
  idLabel.className = 'demo-stake-card__muted';
  idLabel.textContent = stakeId;
  plan.append(heading, idLabel);

  const amountLabel = document.createElement('strong');
  amountLabel.textContent = `${amount.toFixed(2)} ${currency}`;
  topRow.append(plan, amountLabel);

  const details = document.createElement('div');
  details.className = 'demo-stake-card__detail';
  const durationLabel = document.createElement('span');
  durationLabel.textContent = duration;
  const maturityLabel = document.createElement('span');
  maturityLabel.textContent = `Matures ${maturityDate}`;
  details.append(durationLabel, maturityLabel);

  const timerRow = document.createElement('div');
  timerRow.className = 'demo-stake-card__timer';
  const statusLabel = document.createElement('span');
  statusLabel.className = 'demo-stake-card__muted';
  const countdownLabel = document.createElement('strong');
  countdownLabel.className = 'demo-stake-card__countdown';
  timerRow.append(statusLabel, countdownLabel);

  const progressBar = document.createElement('div');
  progressBar.className = 'stake-progress-track';
  progressBar.setAttribute('role', 'progressbar');
  progressBar.setAttribute('aria-label', `Lock progress for ${planName}`);
  progressBar.setAttribute('aria-valuemin', '0');
  progressBar.setAttribute('aria-valuemax', '100');
  const progressFill = document.createElement('div');
  progressFill.className = 'stake-progress-fill';
  progressBar.append(progressFill);

  card.append(topRow, details, timerRow, progressBar);
  activeStakesContainer.prepend(card);
  stake.countdownElement = countdownLabel;
  stake.statusElement = statusLabel;
  stake.progressBar = progressBar;
  stake.progressFill = progressFill;
  activeStakes.push(stake);

  updateActiveStakeTimers();
  if (!countdownInterval) countdownInterval = window.setInterval(updateActiveStakeTimers, 1000);
}

function updateDemoStakedTotal(amount) {
  const currentTotal = Number(totalStakedDisplay.dataset.totalUsd || 0);
  const nextTotal = currentTotal + amount;
  totalStakedDisplay.dataset.totalUsd = nextTotal.toFixed(2);

  const currencyLabel = document.createElement('span');
  currencyLabel.className = 'text-[10px] font-normal text-slate-400';
  currencyLabel.textContent = 'USD';
  totalStakedDisplay.replaceChildren(document.createTextNode(`$${nextTotal.toFixed(2)} `), currencyLabel);
}

function showDemoStakeToast(stakeId) {
  stakingToast.textContent = `Stake created: ${stakeId}`;
  stakingToast.classList.remove('hidden');
  window.clearTimeout(toastTimeout);
  toastTimeout = window.setTimeout(() => stakingToast.classList.add('hidden'), 3500);
}

stakingForm.addEventListener('submit', (event) => {
  if (!validateStakeAmount() || !termsCheckbox.checked) {
    event.preventDefault();
    return;
  }

  if (stakingForm.dataset.previewOnly === 'true') {
    event.preventDefault();
    const amount = Number(amountInput.value);
    const planName = document.getElementById('stake-plan-name').textContent.trim();
    const duration = document.getElementById('stake-duration').textContent.trim();
    const maturityDate = document.getElementById('stake-maturity-date').textContent.trim();

    if (!Number.isFinite(amount) || amount <= 0) {
      amountError.textContent = 'Enter an amount greater than zero.';
      amountError.classList.remove('hidden');
      amountInput.focus();
      return;
    }

    const currency = selectedPlan?.currency || stakingModal.dataset.currency || 'USDT';
    const stakeId = `TXP-STK-DEMO-${demoStakeSequence++}`;
    appendDemoPosition({
      stakeId,
      planName,
      amount,
      currency,
      duration,
      durationDays: selectedPlan.durationDays,
      maturityDate
    });
    updateDemoStakedTotal(amount);
    closeStakingModal();
    showDemoStakeToast(stakeId);
  }
});