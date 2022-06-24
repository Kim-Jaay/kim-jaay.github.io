function Header() {


  const data = [
    { id: 1, content: "바보" },
    { id: 2, content: "천재" },
    { id: 3, content: "메로나" },
  ];

  const Babodata = () => {
    data.map(el => (
      <li > {el.content}</li >
    ))
  }
  return (
    <div className="header">
      <Babodata />
    </div>
  );
}

export default Header;
