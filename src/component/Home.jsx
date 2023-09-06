import { useEffect, useState } from "react";

const Home = ({ allrecord }) => {

    const [record, setRecord] = useState(allrecord);
    const [alldata, setAlldata] = useState("");

    const onclickData = (type) => {
        let ans = allrecord.filter((item) => {
            return item.type === type
        })
        setRecord(ans)
    }
    const AllData = (mb) => {
        let ans = allrecord.filter((item) => {
            return item.mb === mb
        })
        setRecord(ans);
    }
    useEffect(() => {
        let ans = allrecord.filter((item) => {
            return item.name.toLocaleLowerCase().includes(alldata.toLocaleLowerCase())
        })
        setRecord(ans);
    }, [alldata])

    return (
        <>
            <div style={{ margin: "0 auto" }} className="row container">
                <div>
                    <input type="text" placeholder="Search Movies or WEB-Series here...." onChange={(e) => setAlldata(e.target.value)} />
                </div>
                <div className="d-flex justify-content-evenly ">
                    <button onClick={() => onclickData("hollywood")} style={{ backgroundColor: "#44b81a" }}>Hollywood</button>
                    <button onClick={() => onclickData("bollywood")} style={{ backgroundColor: "red" }}>Bollywood</button>
                    <button onClick={() => onclickData("series")} style={{ backgroundColor: "#DF9A17" }}>Series</button>
                </div>
                <div className="d-flex justify-content-evenly ">
                    <button onClick={() => AllData("480px")} style={{ backgroundColor: "#df133c", width: "150px" }}>480P</button>
                    <button onClick={() => AllData("720px")} style={{ backgroundColor: "#df133c", width: "150px" }}>720P</button>
                    <button onClick={() => AllData("1080px")} style={{ backgroundColor: "#df133c", width: "150px" }}>1080P</button>
                    <button onClick={() => AllData("2160px")} style={{ backgroundColor: "#df133c", width: "150px" }}>2160P</button>
                </div>
                {
                    record.map((item) => {
                        return (
                            <div key={item.name} style={{ padding: "10px 20px" }} className="main-card col-3 text-center">
                                <a href={item.molink} style={{textDecoration:"none",color:"white"}}>
                                    <img style={{ width: "100%", height: "450px" }} src={item.img} />
                                    <h6 className="py-3" >{item.name}</h6>
                                </a>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}
export default Home;