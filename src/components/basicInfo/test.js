
describe('Basic' , () => {
    describe('test1', () => {
        test(' should be true ', ()=>{
        expect(true).toBeTruthy()
        })
    })
    
    describe('test2', () => {
        test(' should also be true ', ()=>{
            expect(true).toBeTruthy()
        })
        test(' should also be true ', ()=>{
            expect(true).toBeTruthy()
        })
        test(' should also be true ', ()=>{
            expect(true).toBeTruthy()
        })
    } )

    
})