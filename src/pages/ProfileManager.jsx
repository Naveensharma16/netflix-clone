import React from 'react';



const ProfileManager = () => {
  return (
    <div className='profile-manager-background'>


        <div className='profile-set-box'>
            <h1>Profiles</h1>
            <div className="existing-profile">
                <div className='single-profile'>
                    <div className="single-profile-edit">
                    <img src="../../public/assets/profileedit.svg" alt='' />
                    </div>
                    <p>Abelin</p>
                </div>
                <div className='single-profile'>
                    <div className="single-profile-edit">
                    <img src="../../public/assets/profileedit.svg" alt='' />
                    </div>
                    <p>Abelin</p>
                </div>
                <div className='single-profile'>
                    <div className="single-profile-edit">
                    <img src="../../public/assets/profileedit.svg" alt='' />
                    </div>
                    <p>Abelin</p>
                </div>
            </div>

            <div className="add-profile">
                <button><img src="../../public/assets/addprofieicon.png" alt="" /></button>
            </div>

            <div className='profile-edit-complete'>
              <button>Done</button>
            </div>

        </div>
    </div>
  )
}

export default ProfileManager;