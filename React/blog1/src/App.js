function App() {
  let res = "";
  const loginName = "이순신";
  if (loginName === "이순신") {
    res = <div>이순신입니다.</div>;
  } else {
    res = <div>비회원 입니다.</div>;
  }
  return <>{res}</>;
}

export default App;
