
export const Page = ({user}) => {
    return(
        <div>
            <div>...</div>
            <UserInfoWithTitle title="User Info" user={user}/>
            <div>...</div>
        </div>
    )
}

export const UserInfoWithTitle = ({title, user}) => {
    return(
        <div>
            <div>{title}</div>
            <UserInfo user={user} />
        </div>
    )
}

export const UserInfo = ({user}) => {
    return (
      <div>
        <span>{user.firstName}</span>
        <span>{user.lastName}</span>
      </div>
    );
}

