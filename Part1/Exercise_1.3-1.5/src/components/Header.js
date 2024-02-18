const Header  = (props) => {
  let course = props.course;
  return (
    <>
     <h1>{course.name}</h1>
    </>
  )
}
export default Header;