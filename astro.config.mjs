import { defineConfig } from 'astro/config';

// 프로젝트 페이지 chltaesun.github.io/moon/ 용. base = '/moon'.
// 커스텀 도메인 쓰면 site 값 바꾸고 base 를 '/' 로 되돌리면 됨.
export default defineConfig({
  site: 'https://chltaesun.github.io',
  base: '/moon',
});
