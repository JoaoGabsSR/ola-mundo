import { Route, Routes, useParams } from 'react-router-dom';
import styles from './Post.module.css';
import './Post.css';
import posts from 'json/posts.json';
import CardModel from 'components/CardModel';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import NotFound from 'pages/NotFound';
import DefaultPage from 'components/DefaultPage';
import Card from 'components/Card';

interface IPost {

    id: number;
    titulo: string;
    texto: string;

}

const Post = () => {

    const params = useParams().id;
    const post: IPost = posts.find((p) => { if (params) return p.id === parseInt(params); }) as IPost;
    const postRecommended = posts
        .filter((p) => { if (params) return p.id !== parseInt(params); })
        .sort((a, b) => b.id - a.id)
        .slice(0, 4);

    if (!post) return <NotFound />;

    return (
        <Routes>
            <Route path='*' element={<DefaultPage />}>
                <Route index element={
                    <CardModel capaPicture={`/assets/posts/${params}/capa.png`} title={post.titulo} >
                        <div className='post-markdown-container'>
                            <ReactMarkdown>
                                {post.texto}
                            </ReactMarkdown>
                        </div>
                        <h2 className={styles.tituloOutrosPosts}>Outros postes que você pode gostar: </h2>

                        <ul className={styles.postsRecomendados}>
                            {postRecommended.map((p) => (
                                <li key={p.id}>
                                    <Card post={p} />
                                </li>
                            ))}
                        </ul>
                    </CardModel>
                }></Route>
            </Route>
        </Routes>
    );

}

export default Post;
