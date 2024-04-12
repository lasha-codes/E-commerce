const AddImage = () => {
  return (
    <div className='bg-white w-[300px] h-[180px] translate-x-[50%] translate-y-[50%] z-[999] flex justify-center items-center rounded shadow-sm shadow-cultured'>
      <div className='flex gap-2 flex-col'>
        <label htmlFor='address' className='cursor-pointer text-eerieBlack'>
          Enter image address
        </label>
        <input
          id='address'
          type='text'
          className='rounded cursor-pointer border placeholder:font-light placeholder:opacity-70 px-3 py0.5'
          placeholder='address.'
        />
      </div>
    </div>
  )
}

export default AddImage
