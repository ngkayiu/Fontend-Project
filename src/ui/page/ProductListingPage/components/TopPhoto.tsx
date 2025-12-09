

export default function TopPhoto(){
    return(

        <div style={{ position:`relative`, height: '380px', overflow: 'hidden' }}>
            <img src="/top.jpg" style={{ objectFit: 'cover', width: '100%', height: '100%', display: 'block', filter: `brightness(0.4)` }}/>

        <div style={{
            position: 'absolute',
            top: '50%',           // 從圖片頂部 50%
            left: '50%',          // 從圖片左邊 50%
            transform: 'translate(-50%, -50%)',  // 往左上各拉回自己寬高的一半 → 真正置中
            color: 'white',
            fontSize: '50px',
            textAlign: 'center',
            textShadow: '3px 3px 10px rgba(0,0,0,0.8)',  // 強烈建議加陰影，白色字才看得清楚
            pointerEvents: 'none',   // 讓滑鼠可以穿透文字點到圖片
            whiteSpace: 'nowrap'     // 如果是一行大字就加這行，避免自動換行
        }}>
            Q U A L I T Y S O U N D
        </div>
        </div>
    )

}