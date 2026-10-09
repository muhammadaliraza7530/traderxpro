  <div data-v-0b24035f="" class=":uno: container-card relative rd-$card-radius p-$mg c-$btn-text team-info">
           @foreach($user->allReferrals as $under)
           @if($loop->first)
            @php $layer++ @endphp
        @endif
          <div data-v-0b24035f="" class="other-num">
          <div data-v-0b24035f="" class="item"><div data-v-0b24035f="" class="text-df">{{ $under->username }}</div></div>
           <div data-v-0b24035f="" class="item"><div data-v-0b24035f="" class="text-df">@if($isFirst) (Lv1) @endif</div></div>
      <div data-v-0b24035f="" class="item"><div data-v-0b24035f="" class="text-df">@if($under->deposits->where('status',1)->sum('amount') < 0) Inactive @else Active @endif</div></div>
      
      @if(($under->allReferrals->count()) > 0 && ($layer < $maxLevel))
                @include($activeTemplate.'partials.under_tree',['user'=>$under,'layer'=>$layer,'isFirst'=>false])
            @endif
      </div>
       @endforeach
      </div>