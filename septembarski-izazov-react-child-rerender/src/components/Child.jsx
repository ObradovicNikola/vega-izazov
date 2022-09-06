export default function Child(props) {
  console.log("Child Render");
  return (
    <div>
      <h1>Child</h1>
      <h2>{props.name}</h2>
    </div>
  );
}
