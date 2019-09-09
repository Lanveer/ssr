/**
 * Created by Administrator on 2019/9/9/009.
 */
import Link from 'next/link';
import Header from '../components/header'
const PostLink = (props) => (
    <li>
        <Link href={`/post?title=${props.title}`}>
            <a>{props.title}</a>
        </Link>
    </li>
);

const Index =()=>{
    return(
        <div>
           <h1>my blog</h1>
            <Header/>
            <ul>
                <PostLink title="Hello next.js" />
                <PostLink title="next.js is awesome" />
                <PostLink title="Deploy apps with Zeit" />
            </ul>
        </div>
    )
};
export default Index