/**
 * Created by Administrator on 2019/9/9/009.
 */
import Link from 'next/link'
const Header = ()=>{
    return (
        <div>
            <Link href='/'>Home</Link>
            <span style={{margin:'0 20px 0 20px'}}></span>
            <Link href='/about'>to about</Link>
        </div>
    )
};
export default Header
