@import '../../assets/scss/utils/breakpoints';
@import '../../assets/scss/utils/vars';
@import '../../assets/scss/utils/placeholders';
@import '../../assets/scss/utils/functions';
@import '../../assets/scss/utils/mixins';










































































































.title {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: max-content;
}
.text {
  text-align: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: max-content;
}
.text-inner {
  text-align: center;
}

$count: 10;

@for $i from 1 through $count {
  .text-#{$i} {
    clip-path: inset(#{($i - 1) * 9.9%} 0 #{($count - $i) * 9.9%} 0);
  }
}
