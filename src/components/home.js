
export default function Home () {

  return (
    <>
      <div className="flex h-screen">
        <div className="flex flex-col text-[24px] text-center bg-[#84A9FF] flex-1 text-[#000] justify-center items-center">
          <img className="w-[311px] h-[230px]" src="/assets/v1/images/login_introduce.svg" alt="login"></img>
          <p className="w-[382px] h-auto text-white">Smile while supporting customer is our happiness</p>
        </div>
        <div className="flex-1 flex justify-center mt-[30vh]">
          <div className="flex flex-col items-center">
            <img className="mb-[50px] w-[168px] h-[63px]" src="/assets/v1/images/login.svg" alt="logo"></img>
            <input className="w-[359px] h-[48px] rounded px-[16px] py-[13px] border border-[#E8E8E8] mb-[24px]" type="text"  name="userName" placeholder="Email"></input>
            <input className="w-[359px] h-[48px] rounded px-[16px] py-[13px] border border-[#E8E8E8] mb-[24px]" type="password"  name="password"  placeholder="Password"></input>
            <button className="w-[359px] h-[48px] rounded px-[16px] py-[13px] border border-[#E8E8E8] leading-4 font-medium text-center  text-[16px] text-[#fff] bg-[#303FC5]" type="submit">Login</button>
          </div>
        </div>
      </div>
    </>
  )
}