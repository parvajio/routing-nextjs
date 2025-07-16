export default function DashboardLayout({ 
    children,
    users,
    revenues,
    notifications,
    login
}: {
    children: React.ReactNode;
    users: React.ReactNode;
    revenues: React.ReactNode;
    notifications: React.ReactNode;
    login: React.ReactNode;
}) {

    const isLogedIn = true;

    return isLogedIn ? (
        <>
        <div>
            {children}
        </div>
        <div className="flex">
            <div className="flex flex-col">
                <div>{users}</div>
                <div>{revenues}</div>
            </div>
            <div className="flex flex-1/2">{notifications}</div>
        </div>
        </>
    ) : (
        <div>
            {login}
        </div>
    )
}