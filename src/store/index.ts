import { createStore } from 'vuex'
import { Blog } from '../types';

// Create a new store instance.
const store = createStore({
    state: {
        blogs: [
            {
                id: 10486,
                title: 'Man must explore, and this is at its greatest',
                content: `
                Never in all their history have men been able truly to conceive of the world as one: a single sphere, a globe, having the qualities of a globe, a round earth in which all the directions eventually meet, in which there is no center because every point, or none, is center — an equal earth which all men occupy as equals. The airman's earth, if free men make it, will be truly round: a globe in practice, not in theory.

                Science cuts two ways, of course; its products can be used for both good and evil. But there's no turning back from science. The early warnings about technological dangers also come from science.

                What was most significant about the lunar voyage was not that man set foot on the Moon but that they set eye on the earth.

                A Chinese tale tells of some men sent to harm a young girl who, upon seeing her beauty, become her protectors rather than her violators. That's how I felt seeing the Earth for the first time. I could not help but love and cherish her.

                For those who have seen the Earth from space, and for the hundreds and perhaps thousands more who will, the experience most certainly changes your perspective. The things that we share in our world are far more valuable than those which divide us.dolor aperiam quo iste sint ex autem libero cumque illum, illo praesentium? Nisi.`,
                author: `John Doe`,
                image: `https://source.unsplash.com/random/2024×100/?forest`,
                date: '2023-07-25'
            },
            {
                id: 328784,
                title: 'A Guide to React Context and useContext Hook',
                content: `The main idea of using the context is to allow your components to access global data and re-render when that global data is changed. Context solves the props drilling problem: when you have to pass down props from parents to children.

                You can hold inside the context:
                
                global state
                theme
                application configuration
                authenticated user name
                user settings
                preferred language
                a collection of services
                On the other side, you should think carefully before deciding to use context in your application.
                
                First, integrating the context adds complexity. Creating a context, wrapping everything in a provider, and using the useContext() in every consumer — increases complexity.
                
                Secondly, adding context complicates unit testing of components. During testing, you'll have to wrap the consumer components into a context provider. Including the components that are indirectly affected by the context — the ancestors of context consumers!
                
                3. Use case: global user name
                The simplest way to pass data from a parent to a child component is when the parent assigns props to its child component:
                
                function Application() {
                  const userName = "John Smith";
                  return <UserInfo userName={userName} />;
                }
                
                function UserInfo({ userName }) {
                  return <span>{userName}</span>;
                }
                The parent component <Application /> assigns userName data to its child component <UserInfo name={userName} /> using the userName prop.
                
                That's the usual way how data is passed using props. You can use this approach without problems.
                
                The situation changes when <UserInfo /> component isn't a direct child of <Application />, but is buried somewhere deeper.
                
                For example, let's say that <Application /> component (the one having the global data userName) renders <Layout /> component, which in turn renders <Header /> component, which in turn finally renders <UserInfo /> component (that'd like to access userName).
                
                Here's how such a structuring would look.`,
                author: `Dmitri Pavlutin`,
                image: `https://source.unsplash.com/random/2024×100/?forest`,
                date: '2023-08-02'
            }
        ]
    },
    actions: {
        newPost: (context: any, payload: Blog) => {
            context.commit('newPost', payload);
        },
        updatePost : (context: any, payload: Blog) => {
            context.commit('updatePost', payload);
        },
        deletePost : (context: any, payload: Blog) => {
            context.commit('deletePost', payload);
        }
    },
    mutations: {
        newPost : (state: any, payload: Blog) => {
            state.blogs.push(payload);
        },
        updatePost : (state: any, payload: Blog) => {
            let temp: Blog = state.blogs.find((el: Blog) => {
                return el.id === payload.id;
            });
            let index: number = state.blogs.indexOf(temp);
            state.blogs[index] = payload;
        },
        deletePost: (state: any, payload: number) => {
            state.blogs = state.blogs.filter((el: Blog) => {
                return el.id != payload;
            })
        }
    },
    getters: {
        getPost: (state: any) => (payload: number) => {
            let temp: Blog = state.blogs.find((el: Blog) => {
                return el.id == payload;
            });
            return temp;
        },
        getAllPosts: (state: any) => {
            return state.blogs;
        }
    }
})


export default store;