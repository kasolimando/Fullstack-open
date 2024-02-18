const Part = (props) => {
  return (
     <p>
        {props.parts.name} {props.parts.exercises}
      </p>
  )
} 

const Content = (props) => {
  let course = props.course;
  return (
    <div>
      <Part parts ={course.parts[0]} />
      <Part parts ={course.parts[1]} />
      <Part parts ={course.parts[2]} />
    </div>
  )
} 

export default Content;