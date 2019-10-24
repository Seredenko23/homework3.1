class Element {
  constructor (value) {
  	this.value = value
    this.next = null
    this.prev = null
  }

  setNext (elem) {
    this.next = elem
  }

  setPrev (elem) {
    this.prev = elem
  }

  getNext () {
    return this.next
  }

  getPrev () {
    return this.prev
  }

  add (elem) {
  	this.next === null ? (
  		this.next = elem,
  		elem.setPrev(this),
  		elem.setNext(null)
  	) : this.next.add(elem)
  }

  cut () {
  	this.prev.setNext(this.next)
  	this.next.setPrev(this.prev)
  	this.next = null
  	this.prev = null
  }

  swap (elem) {
  	const arr = [this.next, this.prev]
  	this.prev.setNext(elem)
  	elem.next.setPrev(this)
  	this.setNext(elem.getNext())
  	this.setPrev(elem.getPrev())
  	elem.setNext(arr[0])
  	elem.setPrev(arr[1])
  }
}
