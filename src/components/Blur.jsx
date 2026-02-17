const Blur = ({location}) => {
    return <div className={`w-[100px] h-[300px] rounded-full bg-[#135BEC] blur-[150px] absolute ${location.x === 'left' ? 'left-0' : 'right-0'} ${location.y === 'top' ? 'top-0' : 'bottom-0'}`}></div>
}

export default Blur