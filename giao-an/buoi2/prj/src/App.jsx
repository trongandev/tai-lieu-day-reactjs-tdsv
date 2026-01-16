import "./App.css"
import DefaultComponent from "./components/DefaultComponent"
import FootballSchedule from "./components/FootballSchedule"
import Header from "./components/Header"
import MainContent from "./components/MainContent"
import { Component1, Component2 } from "./components/ManyComponent"
import NewsCard from "./components/NewsCard"
import ProfileCard from "./components/ProfileCard"
import Sidebar from "./components/Sidebar"
import Button from "./components/ui/Button"
import Input from "./components/ui/Input"
import Label from "./components/ui/Label"

function App() {
    return (
        <>
            {/* <DefaultComponent />
            <Component1 />
            <Component2 /> */}
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                {/* <div className="flex gap-5">
                <ProfileCard />
                <ProfileCard />
                <ProfileCard />
            </div> */}
                {/* <div className="space-y-5 py-5  max-w-2xl">
                    <NewsCard />
                    <NewsCard />
                </div> */}
                {/* <div className="space-y-5 max-w-md flex-1">
                    <FootballSchedule />
                    <FootballSchedule />
                    <FootballSchedule />
                    <FootballSchedule />
                    <FootballSchedule />
                </div> */}
                {/* <div className="space-y-5">
                    <h1 className="text-2xl font-medium mb-5">UI Kit</h1>
                    <Button />
                    <Label />
                    <Input />
                </div> */}
            </div>
            {/* <div className="">
                <Header></Header>
                <div className="flex">
                    <Sidebar></Sidebar>
                    <MainContent></MainContent>
                </div>
            </div> */}
        </>
    )
}

export default App
