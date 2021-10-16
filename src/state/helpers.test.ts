import * as helpers from "./helpers"
// @ponicode
describe("helpers.getUid", () => {
    test("0", () => {
        let callFunction: any = () => {
            helpers.getUid(-100)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            helpers.getUid(100)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            helpers.getUid(5)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            helpers.getUid(-5.48)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            helpers.getUid(1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            helpers.getUid(NaN)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("helpers.getStateFromStorage", () => {
    test("0", () => {
        let callFunction: any = () => {
            helpers.getStateFromStorage()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("helpers.saveStateToStorage", () => {
    test("0", () => {
        let param1: any = [{ name: "Anas", description: "my metering label", id: "03ea49f8-1d96-4cd0-b279-0684e3eec3a9" }, { name: "Pierre Edouard", description: "Organize files in your directory instantly, ", id: "03ea49f8-1d96-4cd0-b279-0684e3eec3a9" }]
        let callFunction: any = () => {
            helpers.saveStateToStorage(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let param1: any = [{ name: "Michael", description: "description", id: "03ea49f8-1d96-4cd0-b279-0684e3eec3a9" }, { name: "Michael", description: "Looking for collector with description ", id: "a85a8e6b-348b-4011-a1ec-1e78e9620782" }, { name: "Jean-Philippe", description: "No description.", id: "7289708e-b17a-477c-8a77-9ab575c4b4d8" }]
        let callFunction: any = () => {
            helpers.saveStateToStorage(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let param1: any = [{ name: "Anas", description: "my metering label", id: "03ea49f8-1d96-4cd0-b279-0684e3eec3a9" }, { name: "Pierre Edouard", description: "policy_abc", id: "a85a8e6b-348b-4011-a1ec-1e78e9620782" }, { name: "Michael", description: "This is group1", id: "a85a8e6b-348b-4011-a1ec-1e78e9620782" }]
        let callFunction: any = () => {
            helpers.saveStateToStorage(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let param1: any = [{ name: "Michael", description: "my metering label", id: "7289708e-b17a-477c-8a77-9ab575c4b4d8" }, { name: "Anas", description: "description", id: "a85a8e6b-348b-4011-a1ec-1e78e9620782" }, { name: "Edmond", description: "policy_abc", id: "03ea49f8-1d96-4cd0-b279-0684e3eec3a9" }, { name: "Edmond", description: "(no description available)", id: "03ea49f8-1d96-4cd0-b279-0684e3eec3a9" }, { name: "Pierre Edouard", description: "No description.", id: "7289708e-b17a-477c-8a77-9ab575c4b4d8" }]
        let callFunction: any = () => {
            helpers.saveStateToStorage(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let param1: any = [{ name: "Pierre Edouard", description: "Looking for collector with description ", id: "7289708e-b17a-477c-8a77-9ab575c4b4d8" }, { name: "George", description: "policy_abc", id: "a85a8e6b-348b-4011-a1ec-1e78e9620782" }, { name: "Jean-Philippe", description: "No description.", id: "a85a8e6b-348b-4011-a1ec-1e78e9620782" }]
        let callFunction: any = () => {
            helpers.saveStateToStorage(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            helpers.saveStateToStorage([])
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("helpers.deleteStorage", () => {
    test("0", () => {
        let callFunction: any = () => {
            helpers.deleteStorage()
        }
    
        expect(callFunction).not.toThrow()
    })
})
