<script>
  import { hola } from '@hola-ui/system'
  import { defineComponent, h } from '@vue/runtime-core'
  import { RouterLink } from 'vue-router'
  const Stories = defineComponent({
    props: ['stories'],
    inheritAttrs: false,
    setup(props, { attrs }) {
      return () => {
        return h(hola.nav, [
          h(
            hola.ul,
            {
              p: 0,
              h: '100%',
              m: 0,
              listStyleType: 'none',
              padding: 4,
            },
            props.stories
              .filter(story => story.path !== '/*')
              .map(story =>
                h(
                  hola.li,
                  {
                    pl: 4,
                    key: story.path
                  },
                  story.children
                    ? h(hola.h3, story.name)
                    : [h(RouterLink, { to: story.path }, story.path === '/' ? () => [h(hola.img, { w: '120px', src: 'https://res.cloudinary.com/xtellar/image/upload/v1584242872/hola-ui/hola-ui-vue.png' })] : () => story.name)],
                  story.children && h(Stories, { stories: story.children })
                )
              ),   
          )
        ])
      }
    },
  })
  export default Stories
  </script>