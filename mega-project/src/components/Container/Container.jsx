function Container({ children }) {
  return (
    <div className="container mx-auto sm:px-6 md:px-12 lg:px-24">
      {children}
    </div>);
}

export default Container;