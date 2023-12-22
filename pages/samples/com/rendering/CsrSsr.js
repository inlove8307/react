import CustomLink from "@/components/com/CustomLink";
import Layout from "@/components/com/Layout";
import ComponentInitializer from "@/utils/ComponentInitializer";
import { useEffect, useState } from "react";

const { HOF } = ComponentInitializer.init('ServerSide');

const divStyle = {
    border: '1px solid black',
    padding: '10px 10px'
}

// API 를 통해 서버에서 데이터를 조회한다고 가정하는 셈플링 함수
const getServerData = HOF(async () => {
    return new Promise((resolve) => {
        // 2초 후 데이터를 리턴한다.
        setTimeout(() => {
            resolve({
                name: 'SeongHeon',
                age: '20'
            });
        }, 500);
    });
})

/** 서버에서 실행되는 함수. export async function getServerSideProps 이렇게 정의하는게 nextjs에서 약속되어 있다. **/
export async function getServerSideProps() {
    const serverData = await getServerData();

    return {
        props: {
            serverData
        }
    };
}

/** 컴포넌트 **/
export default HOF(({serverData}) => {  // getServerSideProps return 한 props 데이터를 받는다.
    const [ csrData, setCsrData ] = useState({});

    // 화면에서 특벽히 가공할 일이 없으면 props 데이터를 그냥 사용해도 되지만 가공이 필요할 경우 props 데이터를 이용해 state 데이터를 만든다.
    const [ ssrData ] = useState(serverData);   

    // CSR로 처리하기 위해 화면이 마운트 된 후 서버에서 데이터를 조회하여 state에 셋팅한다.
    useEffect(() => {
        // useEffect 는 async 함수를 사용할 수 없기 때문에 내부 로직에서 별도로 async 함수를 만들어 사용한다.
        const asyncRun = HOF(async () => {
            const result = await getServerData();
            setCsrData(result);

        }, 'useEffect');
        
        asyncRun();

    }, []);
    

    return (
        <Layout>
            <h1>서버 사이드 렌더링 셈플</h1>
            <h2>API를 통해 서버에서 데이터를 조회한 후 바인딩하여 렌더링된 리소스를 내려준다.</h2>
            <div style={divStyle}>
                <h2>CSR(클라이언트 사이드 렌더링) 영역</h2>
                <p>csr name: {csrData.name}</p>
                <p>csr age: {csrData.age}</p>
            </div>

            <br/><br/>
           
            <div style={divStyle}>
                <h2>SSR(서버 사이드 렌더링) 영역</h2>
                <p>csr name: {ssrData.name}</p>
                <p>csr age: {ssrData.age}</p>
            </div>

            <br/><br/><br/>
            <CustomLink href="/samples/SampleMain">Sample Main 화면으로...</CustomLink>
        </Layout>
    )
});

