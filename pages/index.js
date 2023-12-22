export default function IndexPage() {
    // 실제 렌더링되는 컴포넌트 내용은 비워둡니다.
    // 왜냐하면 이 페이지는 실제로 렌더링되지 않고 리다이렉트될 것이기 때문입니다.
    return <div></div>;
}

export async function getServerSideProps(context) {
    // 리다이렉트 설정
    return {
        redirect: {
            destination: '/samples/SampleMain', // 리다이렉트할 경로
            permanent: false, // 일시적 리다이렉트
        },
    };
}