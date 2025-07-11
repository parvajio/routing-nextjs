export default function DashboardLayout({ 
    children,
    users,
    revenues,
    notifications
}: {
    children: React.ReactNode;
    users: React.ReactNode;
    revenues: React.ReactNode;
    notifications: React.ReactNode;
}) {
    return (
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
    )
}