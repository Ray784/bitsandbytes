q = __import__('queue');
#place queue.py in same directory as this file

class TreeNode(object):
	def __init__(self, data):
		super(TreeNode, self).__init__()
		self.data = data
		self.left = None
		self.right = None

class Tree(object):
	def __init__(self):
		super(Tree, self).__init__()

	def createTree(self, root, *elements):
		for element in elements:
			root = self.insert(root, element)
		return root

	def insert(self, root, data):
		if(root == None):
			root = TreeNode(data)
		elif(data > root.data):
			root.right = self.insert(root.right, data)
		else:
			root.left = self.insert(root.left, data)
		return root

	def delete(self, root, data):
		if(root == None):
			print('Error - '+str(data)+' Node Not found')
		elif(data > root.data):
			root.right = self.delete(root.right, data)
		elif(data < root.data):
			root.left = self.delete(root.left, data)
		else:
			if(root.right == None):
				return root.left
			elif(root.left == None):
				return root.right
			else:
				temp = root.right
				while(temp != None and temp.left != None):
					temp = temp.left
				root.data = temp.data
				root.right = self.delete(root.right, temp.data)
		return root

	def preorder(self, root):
		if(root == None):
			return 
		print(root.data, end=" ")
		self.preorder(root.left)
		self.preorder(root.right)

	def inorder(self, root):
		if(root == None):
			return 
		self.inorder(root.left)
		print(root.data, end=" ")
		self.inorder(root.right)

	def postorder(self, root):
		if(root == None):
			return 
		self.postorder(root.left)
		self.postorder(root.right)
		print(root.data, end=" ")

	def levelorder(self, root):
		if(root == None):
			return 
		queue = q.Queue()
		queue.createQueue(root)
		while(not queue.isEmpty()):
			root = queue.dequeue();
			if root.left != None:
				queue.enqueue(root.left)
			if root.right != None:
				queue.enqueue(root.right)
			print(root.data, end=" ")

root = None
tree = Tree()
root = tree.createTree(root, 10, 20, 3, 4)
root = tree.insert(root, 1);
root = tree.insert(root, 15);
root = tree.insert(root, 9);
root = tree.insert(root, 90);
tree.inorder(root);
print()
root = tree.delete(root, 5);
root = tree.delete(root, 10);
print("\ninorder: ",end="")
tree.inorder(root);
print("\npreorder: ",end="")
tree.preorder(root);
print("\npostorder: ",end="")
tree.postorder(root);
print("\nlevelorder: ",end="")
tree.levelorder(root);