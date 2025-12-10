function recalculate() {

    // ITEM 1
    let q1 = Number(document.getElementById("i1_qty").value);
    let r1 = Number(document.getElementById("i1_rate").value);
    let a1 = q1 * r1;
    document.getElementById("i1_amt").innerText = a1.toFixed(2);

    // CGST
    let cg = Number(document.getElementById("cgst").value);
    document.getElementById("cgst_amt").innerText = cg.toFixed(2);

    // SGST
    let sg = Number(document.getElementById("sgst").value);
    document.getElementById("sgst_amt").innerText = sg.toFixed(2);

    // TOTAL
    let total = a1 + cg + sg;
    document.getElementById("total").innerText = total.toFixed(2);
}
