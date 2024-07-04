// SiteTitle.jsx

const SiteTitle = ({
  SiteTitleStyle,
  IdentityStyle,
  FirstnameStyle,
  LastnameStyle,
  JobTitleStyle
}) => {
  return (
    <div className={SiteTitleStyle}>
      <div className={IdentityStyle}>
        <p className={FirstnameStyle}>Alexia</p>
        <p className={LastnameStyle}>Skrzypczak</p>
      </div>
      <p className={JobTitleStyle}>Développeur Web & UX Designer</p>
    </div>
  )
}

export default SiteTitle
