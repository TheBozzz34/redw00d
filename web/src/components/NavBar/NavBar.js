import { BsPlus, BsFillLightningFill, BsGearFill } from 'react-icons/bs'
import { FaFire, FaPoo } from 'react-icons/fa'

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-header-text">RedwoodJS</div>
        <div className="sidebar-header-icon">
          <BsPlus />
        </div>
      </div>
      <div className="sidebar-menu">
        <div className="sidebar-menu-item">
          <div className="sidebar-menu-item-icon">
            <FaFire />
          </div>
          <div className="sidebar-menu-item-text">Dashboard</div>
        </div>
        <div className="sidebar-menu-item">
          <div className="sidebar-menu-item-icon">
            <BsFillLightningFill />
          </div>
          <div className="sidebar-menu-item-text">Quick Start</div>
        </div>
        <div className="sidebar-menu-item">
          <div className="sidebar-menu-item-icon">
            <FaPoo />
          </div>
          <div className="sidebar-menu-item-text">Tutorial</div>
        </div>
        <Divider />
        <div className="sidebar-menu-item">
          <div className="sidebar-menu-item-icon">
            <BsGearFill />
          </div>
          <div className="sidebar-menu-item-text">Settings</div>
        </div>
      </div>
    </div>
  )
}

const Divider = () => {
  return <div className="sidebar-menu-divider"></div>
}

export default SideBar
