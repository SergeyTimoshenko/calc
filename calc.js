class Calc {
    constructor(arg) {

        let first = String(arg[2]).split('').reverse()
        let sec = String(arg[3]).split('').reverse()

        this.first = first
        this.sec = sec

        this.res = this.calc()
    }

    calc() {
        let resp = [];
        this.first.forEach(m => {
            resp.push([])
            let um = null
            this.sec.forEach((n, k) => {
                let num = String(Number(m) * Number(n))
                let res = num[num.length - 1]
                let forUm = res[1] ? res[0] : null;
                
                if (um !== null) {
                    res = String(Number(res) + Number(um))
                }

                if (num.length > 1) {
                    
                    
                    forUm = forUm !== null ? Number(forUm) + Number(num[0]) : num[0]
                }

                if (num.length > 1) {
                    
                }

                um = forUm !== null ? String(forUm) : null
                resp[resp.length - 1].push(res)
                if (this.sec.length - 1 === k) {
                    resp[resp.length - 1].push(um)
                }
            })
        })
        return this.sum(resp)
    }
    sum(forSum) {
        let redy = forSum.map((digit, k) => {
            if (k === 0) return digit
            let d = digit.reverse()
            for(let i = 0; i < k; i++) {
                d.push('0')
            }
            return d.reverse()
        })

        let count = redy[redy.length - 1].length - 1
        let resp = []

        for (let i = 0; i <= count; i++) {
            let res = 0
            redy.forEach(n => {
                res += n[i] === undefined ? 0 : Number(n[i])
            })
            resp.push(String(res))
        }
        let um = null
        resp = resp.map((v, k) => {
            let res = String(Number(v) + Number(um !== null ? um : 0))
            um = null
            let r = null
            if (res.length > 1) {
                r = res[res.length - 1]
                um = res.substr(0, res.length - 1)
            } else {
                r = res[res.length - 1]
            }
            return r
        })
        if (um) {
            resp.push(um.split('').reverse().join(''))
        }
        
        return resp.reverse().join('')
    }
}
console.log((new Calc(process.argv)).res)