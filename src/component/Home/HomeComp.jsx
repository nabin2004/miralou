function HomeComp(props) {
  return (
    <div>
      <div className='grid'>
      <img src={props.src} alt="" />
      <button className='bg-zinc-300 w-52 justify-self-center h-14 -my-9'>{props.name}</button>
      </div>
    </div>
  )
}

export default HomeComp
