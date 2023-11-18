//* Callables

interface TwoNumberCalculation { //* this cannot be used with `implement` when defining a class because the function inside it does not have a name
  (x: number, y: number): number
}

type TwoNumberCalc = (x: number, y: number) => number

const add: TwoNumberCalculation = (a, b) => a + b
const subtract: TwoNumberCalc = (x, y) => x - y

//* `void`

function printFormattedJSON(obj: string[]) {
    console.log(JSON.stringify(obj, null, "  "))
}

const x = printFormattedJSON(["hello", "world"])


function invokeInFourSeconds(callback: () => undefined) {
    setTimeout(callback, 4000)
}
function invokeInFiveSeconds(callback: () => void) { //* I will accept a function but I don't care what it returns, it could be returning something but I don't care
    setTimeout(callback, 5000)
}

const values: number[] = []
invokeInFourSeconds(() => values.push(4)) //! Error: Type 'undefined' is not assignable to type 'number'.
invokeInFiveSeconds(() => values.push(4))

//* Constructables

interface DateConstructor {
    new(value: number): Date
}

let MyDateConstructor: DateConstructor = Date
const d = new MyDateConstructor(1697923072611)

//* Function overloads <-- IMPORTANT

type FormSubmitHandler = (data: FormData) => void
type MessageHandler = (evt: MessageEvent) => void

//? Add above handleMainEvent function declaration
function handleMainEvent(
  elem: HTMLFormElement,
  handler: FormSubmitHandler
): void
function handleMainEvent(
  elem: HTMLIFrameElement,
  handler: MessageHandler
): void

function handleMainEvent(
    elem: HTMLFormElement | HTMLIFrameElement,
    handler: FormSubmitHandler | MessageHandler,
) { }

const myFrame = document.getElementsByTagName("iframe")[0]
handleMainEvent(myFrame, (val) => {
})

// //? Form handler has a specific type now!
// const myForm = document.getElementsByTagName("form")[0]
// handleMainEvent(myForm, (val) => {
// })

//* `this` types

function myClickHandler(this: HTMLButtonElement, event: Event) { //* `this` is a special parameter
    this.disabled = true
}


const myButton = document.getElementsByTagName("button")[0]
const boundHandler = myClickHandler.bind(myButton)
boundHandler(new Event("click")) // bound version: ok

myClickHandler(myButton, new Event("click")) //! Error because `this` cannot be treated as a regular parameter
myClickHandler.call(myButton, new Event("click")) // also ok

//* Function best practices

//? Explicit function return types

export async function getData(url: string) {
    const resp = await fetch(url)
    // if (resp.ok) {
        const data = (await resp.json()) as {
            properties: string[]
        }
        return data
    // }
}

// function loadData() {
//     getData("https://example.com").then((result) => {
//         console.log(result.properties.join(", "))
//         //           ^?
//     })
// }
/**/
export default {}
