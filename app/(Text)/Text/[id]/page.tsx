export default function textPage({ params: { id } }: { params: { id: string } }) {
    // props를 까보면, 이전 페이지에서 넘긴 id파라메터와 (혹시 존재할경우) 다른 파라메터들이 오브젝트로 잡힘.
    return <h1>Routegroup & DynamicRoute Test {id}</h1>;
    // 디렉터리 명을 ()로 씌웠을경우, 라우팅그룹, 원하는 레이아웃만을 활성화 하거나, 비활성화 할수있음.
    // []일경우, 다이나믹 라우팅,  url에 파라메터같은거를 넣어서 접속하는 그 짓거리 가능 ~url/Text/1231455?msg="dd" 같은 거
}