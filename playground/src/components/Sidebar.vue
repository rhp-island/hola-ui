<script>
  import { defineComponent, h } from 'vue'
  import { RouterLink } from 'vue-router'
  import routes from '../.generated/routes.json'
  
  const Stories = defineComponent({
    props: ['stories'],
    setup(props) {
      return () => {
        return h(
          'ul',
          props.stories
          .filter(story => story.path !== '/*')
          .map(story =>
            h(
              'li',
              {
                key: story.path
              },
              story.children
                ? h('h3', story.name)
                : [h(RouterLink, { to: story.path }, story.path === '/' ? () => [h('img', { class: ['logo'], src: 'https://scholarblogs.emory.edu/lits/files/2019/03/atomicdesign.png' })] : () => story.name)],
              story.children && h(Stories, { stories: story.children })
            )
          )
        )
      }
    },
  })
  
  export default Stories
  </script>
  
  <style>
  ul {
    /* list-style-type: none; */
    padding: 0;
  }
  
  li > ul {
    padding-left: 1rem;
  }
  
  .logo {
    width: 120px;
  }
  </style>