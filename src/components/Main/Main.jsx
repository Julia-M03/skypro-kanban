import { Column } from "../Column/Column";

const statusList = ["Без статуса","Нужно сделать", "В работе", "Тестирование", "Готово"] 

export function Main({loading}) {

    return (
        // {
        //     loading ? <Loader /> : ""
        // }
        <main className="main">
            <div className="container">
                <div className="main__block">
                    <div className="main__content">
                       {
                        statusList.map((item) => <Column loading={loading} title={item} key={item} />)
                       } 
                       

                    </div>
                </div>
            </div>
        </main>
    )
}