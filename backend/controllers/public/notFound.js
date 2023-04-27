function notFound(res){

    const payload = { err: "No Page Found" }
    let payloadStr = JSON.stringify(payload);

    res.setHeader("Content-Type", "application/json");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.writeHead(404);
    res.write(payloadStr);
    res.end("\n");
}

export default notFound