/**
 * Created by Administrator on 2019/9/9/009.
 */
import Link from 'next/link';
import Header from '../components/header'

//  路由伪装
const PostLink = (props) => (
    <li>
        <Link href={`/post?title=${props.title}`} as={`/${props.id}`}>
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
                <PostLink title="Hello next.js" id="lanveer" />
                <PostLink title="next.js is awesome" id="albert"/>
                <PostLink title="Deploy apps with Zeit" id="zoey"/>
            </ul>
        </div>
    )
};
export default Index