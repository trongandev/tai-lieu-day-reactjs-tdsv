import "./App.css"
import Badge from "./components/Badge"
import ProductItem from "./components/ProductItem"
import ProfileCard from "./components/ProfileCard"
import SidebarToggle from "./components/SidebarToggle"
import Welcome from "./components/Welcome"

function App() {
    const products = [
        { id: 1, name: "A" },
        { id: 2, name: "B" },
        { id: 3, name: "C" },
        { id: 4, name: "D" },
    ]
    return (
        <div className="p-10">
            {/* {products.map((p) => (
                <ProductItem key={p.id} data={p} />
            ))}

            <Welcome name="Trọng An" role="Giáo viên" /> */}

            {/* <div className="flex gap-3">
                <Badge>Primary</Badge>
                <Badge variant="inactive">Secondary</Badge>
                <Badge variant="pending">Danger</Badge>
            </div> */}
            {/* <div className="flex gap-5">
                <ProfileCard name="Trọng An" job="Giáo viên" avatarUrl="/path/to/avatar1.jpg" />
                <ProfileCard name="Thiên Văn Hoàng" job="Backend Developer" avatarUrl="/path/to/avatar2.jpg" />
                <ProfileCard name="Nguyễn Văn Tuyền" job="Frontend Developer" avatarUrl="/path/to/avatar3.jpg" />
            </div> */}
            <SidebarToggle />
        </div>
    )
}

export default App
