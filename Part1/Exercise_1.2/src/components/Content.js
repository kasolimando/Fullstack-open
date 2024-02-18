const Part1 = (props) => {
  return (
    <>
     <p>
        {props.part1} {props.exercises1}
      </p>
    </>
  )
} 

const Part2 = (props) => {
  return (
    <>
      <p>
        {props.part2} {props.exercises2}
      </p>
    </>
  )
} 

const Part3 = (props) => {
  return (
    <>
      <p>
        {props.part3} {props.exercises3}
      </p>
    </>
  )
} 

const Content = (props) => {
  return (
    <div>
      <Part1 part1 = {props.part1} exercises1 = {props.exercises1} />
      <Part2 part2 = {props.part2} exercises2 = {props.exercises2} />
      <Part3 part3 = {props.part3} exercises3 = {props.exercises3} />
    </div>
  )
} 

export default Content;