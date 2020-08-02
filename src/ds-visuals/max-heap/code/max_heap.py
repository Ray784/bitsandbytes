
class Heap(object):
	def __init__(self):
		super(Heap, self).__init__()
		self.size = 0
		self.CAPACITY = 10
		self.heap = [-sys.maxint-1]*(self.CAPACITY+1)
		self.heap[0] = sys.maxint

	def parent(self, pos):
		return pos // 2

	def left(self, pos):
		return 2 * pos

	def right(self, pos):
		return 2 * pos + 1

	def swap(self, pos1, pos2):
		self.heap[pos1] += self.heap[pos2]
		self.heap[pos2] = self.heap[pos1]- self.heap[pos2]
		self.heap[pos1] -= self.heap[pos2]

	def insert(self, data):
		if(self.size == self.CAPACITY):
			print("Error- stack full")
		self.size += 1
		self.heap[self.size] = data
		current = self.size
		while(self.heap[current] > self.heap[self.parent(current)]):
			self.swap(current, self.parent(current));
			current = self.parent(current);
		return;

	def adjust(self):
		i = 1;
		while(i <= self.size//2):
			if(self.left(i) > self.CAPACITY or self.right(i) > self.CAPACITY):
				break
			if(self.heap[i] < self.heap[self.left(i)] or self.heap[i] < self.heap[self.right(i)]):
				if(self.heap[self.left(i)] > self.heap[self.right(i)]):
					self.swap(i, self.left(i))
					i = self.left(i)
				else:
					self.swap(i, self.right(i))
					i = self.right(i)
			else:
				break


	def delete(self):
		val = self.heap[1]
		self.heap[1] = self.heap[self.size]
		self.size -= 1
		self.adjust()
		return val;

	def display(self):
		result = "";
		for i in range(1, self.size//2 +1):
			r = str(self.heap[self.right(i)]) if(self.right(i) <= self.size) else "";
			l = str(self.heap[self.left(i)]) if(self.left(i) <= self.size) else "";
			result += "node: "+str(self.heap[i])+" left: "+l+" right: "+r+"\n";
		return result;

	def createHeap(self, *elements):
		for element in elements:
			self.insert(element)


h = Heap()
h.createHeap(3, 5, 2, 7)
print(h.display())

h.insert(1)
h.insert(9)
print(h.display())

print("element popped: "+str(h.delete()))
print(h.display())
