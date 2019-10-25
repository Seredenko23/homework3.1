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
	  if (this.prev !== null) { this.prev.setNext(elem) }
	  if (elem.next !== null) { elem.next.setPrev(this) }
  	if (arr[0] === elem) {
	  	this.setNext(elem.getNext())
	  	this.setPrev(elem)
	  	elem.setNext(this)
	  	elem.setPrev(arr[1])
  	} else {
  		this.setNext(elem.getNext())
	  	this.setPrev(elem.getPrev())
	  	if (this.prev !== null) { this.prev.setNext(this) }
	  	elem.setNext(arr[0])
	  	elem.setPrev(arr[1])
	  	if (elem.next !== null) { elem.next.setPrev(elem) }
  	}
  }

  contains (elem) {
  	return this.next === elem ? true
  	: this.next === null ? false
  	: this.next.contains(elem)
  }
}
