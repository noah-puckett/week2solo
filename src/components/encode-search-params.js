function encodeSearchParams(param, value) {
    const sp = new URLSearchParams();
    sp.set(param, value);
    return sp.toString();
}
export default encodeSearchParams;