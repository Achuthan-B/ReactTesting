type greetingProps = {
  name?: string;
};

const Greet = (props: greetingProps) => {
  const { name } = props;
  return <div>Hello {name}</div>;
};

export default Greet;
