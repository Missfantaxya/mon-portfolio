function SectionTitle({ title, Icon }) {
  return (
    <div className="w-max mx-auto my-8 flex flex-raw space-x-4 bg-secondary rounded-3xl px-6 py-4">
      <Icon
        className="portrait:w-[2vh] landscape:w-[2vw]"
        color="currentColor"
      />
      <h2 className="portrait:text-[3vh] landscape:text-[2vw] font-semibold">
        {title}
      </h2>
    </div>
  )
}

export default SectionTitle
