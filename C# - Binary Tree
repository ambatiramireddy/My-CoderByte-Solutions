using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TempConsoleApp.Nodes
{
    class BTNode
    {
        public int data;
        public BTNode left;
        public BTNode right;

        public BTNode(int data)
        {
            this.data = data;
        }
    }

    class BinaryTree
    {
        public BTNode root;

        public void InsertLeft(BTNode node, int data)
        {
            var newNode = new BTNode(data);

            if (node.left == null)
            {
                node.left = newNode;
            }
            {
                newNode.left = node.left;
                node.left = newNode;
            }
        }

        public int Height(BTNode root)
        {
            if (root == null)
            {
                return 0;
            }

            return Math.Max(Height(root.left), Height(root.right)) + 1;
        }

        public void LeafNodes(BTNode root, List<BTNode> nodes)
        {
            if (root == null)
            {
                return;
            }

            if (root.left == null && root.right == null)
            {
                nodes.Add(root);
                return;
            }

            LeafNodes(root.left, nodes);
            LeafNodes(root.right, nodes);
        }

        public void NodesWithOneChild(BTNode root, List<BTNode> nodes)
        {
            if (root == null)
            {
                return;
            }

            if ((root.left == null && root.right != null) || (root.right == null && root.left != null))
            {
                //when left or right is null but not both
                nodes.Add(root);
                return;
            }

            NodesWithOneChild(root.left, nodes);
            NodesWithOneChild(root.right, nodes);
        }

        public void PrintNodesAtLevel(BTNode root, int level)
        {
            if (root == null)
            {
                return;
            }

            if (level == 0)
            {
                Console.Write(root.data + " ");
            }
            else
            {
                PrintNodesAtLevel(root.left, level - 1);
                PrintNodesAtLevel(root.right, level - 1);
            }
        }

        public void PrintNodesInLevelOrder(BTNode root)
        {
            int height = Height(root);
            for (int i = 0; i < height; i++)
            {
                PrintNodesAtLevel(root, i);
            }
        }

        public void PrintNodesInLevelOrderUsingBFS(BTNode root)
        {
            List<BTNode> list = BFS(root);
            foreach (var item in list)
            {
                Console.Write(item.data + " ");
            }
        }

        public List<BTNode> BFS(BTNode root)
        {
            if (root == null)
            {
                return null;
            }

            List<BTNode> list = new List<BTNode>();
            Queue<BTNode> q = new Queue<BTNode>();
            q.Enqueue(root);

            while (q.Count > 0)
            {
                var current = q.Dequeue();
                list.Add(current);

                if (current.left != null)
                {
                    q.Enqueue(current.left);
                }

                if (current.right != null)
                {
                    q.Enqueue(current.right);
                }
            }

            return list;
        }

        public int HeightUsingBFS(BTNode root)
        {
            if (root == null)
            {
                return 0;
            }

            Queue<BTNode> q = new Queue<BTNode>();
            q.Enqueue(root);
            int height = 0;

            while (q.Count > 0)
            {
                int nodeCountAtCurrentLevel = q.Count;
                while (nodeCountAtCurrentLevel > 0)
                {
                    var current = q.Dequeue();

                    if (current.left != null)
                    {
                        q.Enqueue(current.left);
                    }

                    if (current.right != null)
                    {
                        q.Enqueue(current.right);
                    }

                    nodeCountAtCurrentLevel--;
                }

                height++;
            }

            return height;
        }

        public void PrintNodesAtLevelUsingBFS(BTNode root, int level)
        {
            if (root == null)
            {
                return;
            }

            Queue<BTNode> q = new Queue<BTNode>();
            q.Enqueue(root);
            int height = 0;

            while (q.Count > 0)
            {
                int nodeCountAtCurrentLevel = q.Count;
                while (nodeCountAtCurrentLevel > 0)
                {
                    var current = q.Dequeue();

                    if (height == level)
                    {
                        Console.Write(current.data + " ");
                    }

                    if (current.left != null)
                    {
                        q.Enqueue(current.left);
                    }

                    if (current.right != null)
                    {
                        q.Enqueue(current.right);
                    }

                    nodeCountAtCurrentLevel--;
                }

                height++;

                if (height > level)
                {
                    return;
                }
            }
        }

        // Pre-Order: in any subtree, traverse middle->left->right
        public void PreOrder(BTNode root, List<int> list = null)
        {
            if (root == null)
            {
                return;
            }

            if (list != null)
            {
                list.Add(root.data);
            }
            else
            {
                Console.Write(root.data + " ");
            }

            PreOrder(root.left, list);
            PreOrder(root.right, list);
        }

        // In-Order: in any subtree, traverse left->middle->right
        public void InOrder(BTNode root)
        {
            if (root == null)
            {
                return;
            }

            InOrder(root.left);
            Console.Write(root.data + " ");
            InOrder(root.right);
        }

        // Post-Order: in any subtree, traverse left->right->middle
        public void PostOrder(BTNode root)
        {
            if (root == null)
            {
                return;
            }

            PostOrder(root.left);
            PostOrder(root.right);
            Console.Write(root.data + " ");
        }

        public BTNode LowestCommonAncestor(BTNode root, int a, int b)
        {
            if (root == null)
            {
                return null;
            }

            if (root.data == a || root.data == b)
            {
                return root;
            }

            var left = LowestCommonAncestor(root.left, a, b);
            var right = LowestCommonAncestor(root.right, a, b);

            if (left != null && right != null)
            {
                return root;
            }
            else
            {
                return left ?? right;
            }
        }

        public BTNode FindParent(BTNode root, int a)
        {
            if (root == null)
            {
                return null;
            }

            if ((root.left != null && root.left.data == a) || (root.right != null && root.right.data == a))
            {
                return root;
            }

            var left = FindParent(root.left, a);
            if (left != null)
            {
                return left;
            }

            return FindParent(root.right, a);
        }

        public BTNode Find(BTNode root, int a)
        {
            if (root == null)
            {
                return null;
            }

            if (root.data == a)
            {
                return root;
            }

            var left = Find(root.left, a);
            if (left != null)
            {
                return left;
            }

            return Find(root.right, a);
        }


        public bool FindAncestors(BTNode root, int a, List<int> list)
        {
            if (root == null)
            {
                return false;
            }

            if (root.data == a)
            {
                return true;
            }

            if (FindAncestors(root.left, a, list) || FindAncestors(root.right, a, list))
            {
                list.Add(root.data);
                return true;
            }

            return false;
        }

        public int LowestCommonAncestorUsingAncestor(BTNode root, int a, int b)
        {
            var aAncestors = new List<int>();
            FindAncestors(root, a, aAncestors);

            var bAncestors = new List<int>();
            FindAncestors(root, b, bAncestors);

            return aAncestors.Intersect(bAncestors).FirstOrDefault();
        }

        public void DeepestNode(BTNode root)
        {
            List<BTNode> list = BFS(root);
            Console.Write(list[list.Count - 1].data);
        }

        public void LeftMostNode(BTNode root)
        {
            var current = root;
            while (current.left != null)
            {
                current = current.left;
            }
            Console.Write(current.data);
        }

        public void RightMostNode(BTNode root)
        {
            var current = root;
            while (current.right != null)
            {
                current = current.right;
            }
            Console.Write(current.data);
        }

        public bool IsIdentical(BTNode x, BTNode y)
        {
            if (x == null && y == null)
                return true;

            if (x == null || y == null)
                return false;

            return (x.data == y.data) && IsIdentical(x.left, y.left) && IsIdentical(x.right, y.right);
        }

        public void PrintPaths(BTNode root, String path, List<String> paths)
        {
            if (root == null)
            {
                return;
            }

            path = (string.IsNullOrEmpty(path) ? string.Empty : path + ",") + root.data;

            if (root.left == null && root.right == null)
            {
                paths.Add(path);
                return;
            }

            PrintPaths(root.left, path, paths);
            PrintPaths(root.right, path, paths);
        }


    }

    class BinaryTreeTest
    {
        public static void Populate(BinaryTree tree)
        {
            tree.root = new BTNode(1);
            tree.root.left = new BTNode(2);
            tree.root.right = new BTNode(3);
            tree.root.left.left = new BTNode(4);
            tree.root.left.right = new BTNode(5);
            tree.root.left.right.left = new BTNode(8);
            tree.root.right.left = new BTNode(6);
            tree.root.right.right = new BTNode(7);
            tree.root.right.right.right = new BTNode(9);

            tree.root.left.left.left = new BTNode(10);
            tree.root.left.left.left.left = new BTNode(11);
        }

        public static void Run(Action action, string actionName)
        {
            Console.Write($"{actionName}: ");
            action();
            Console.WriteLine();
            Console.WriteLine();
        }

        public static void Main(string[] args)
        {
            BinaryTree tree = new BinaryTree();
            Populate(tree);

            var paths = new List<string>();
            tree.PrintPaths(tree.root, string.Empty, paths);

            Run(() =>
            {
                Console.WriteLine();
                foreach (var path in paths)
                {
                    Console.WriteLine(path.Replace(",","-->"));
                }
                
            }, "AllPaths");

            Run(() => Console.Write(paths.OrderBy(p => p.Split(',').Length).Last()), "LongestPath");


            Run(() => Console.Write(tree.Height(tree.root)), "Height");
            Run(() => Console.Write(tree.HeightUsingBFS(tree.root)), "HeightUsingBFS");
            Run(() => tree.PreOrder(tree.root), "PreOrder");
            Run(() => tree.InOrder(tree.root), "InOrder");
            Run(() => tree.PostOrder(tree.root), "PostOrder");
            Run(() => tree.PrintNodesInLevelOrder(tree.root), "PrintNodesInLevelOrder");
            Run(() => tree.PrintNodesInLevelOrderUsingBFS(tree.root), "PrintNodesInLevelOrderUsingBFS");
            Run(() => tree.PrintNodesAtLevelUsingBFS(tree.root, 3), "PrintNodesAtLevelUsingBFS");
            Run(() => tree.DeepestNode(tree.root), "DeepestNode");
            Run(() => tree.LeftMostNode(tree.root), "LeftMostNode");
            Run(() => tree.RightMostNode(tree.root), "RightMostNode");
            Run(() => Console.Write(tree.FindParent(tree.root, 6).data), "Parent of 6");
            Run(() =>
            {
                List<int> list = new List<int>();
                tree.FindAncestors(tree.root, 8, list);
                foreach (var item in list)
                {
                    Console.Write(item + " ");
                }
            }, "FindAncestors");
            Run(() =>
            {
                List<int> list = new List<int>();
                tree.FindAncestors(tree.root, 8, list);
                var nthParent = 3;
                if (nthParent <= list.Count)
                {
                    Console.Write(list[nthParent - 1]);
                }
                
            }, "FindNthParent");
            Run(() =>
            {
                List<BTNode> list = new List<BTNode>();
                tree.LeafNodes(tree.root, list);
                foreach (var item in list)
                {
                    Console.Write(item.data + " ");
                }

            }, "LeafNodes");
            Run(() =>
            {
                List<BTNode> list = new List<BTNode>();
                tree.NodesWithOneChild(tree.root, list);
                foreach (var item in list)
                {
                    Console.Write(item.data + " ");
                }

            }, "NodesWithOneChild");
            Run(() => Console.Write(tree.LowestCommonAncestor(tree.root, 8, 9).data), "LowestCommonAncestor");
            Run(() =>
            {
                var lca = tree.LowestCommonAncestorUsingAncestor(tree.root, 6, 7);
                Console.Write(lca + " ");
            }, "LowestCommonAncestorUsingAncestor");

            var tree2 = new BinaryTree();
            Populate(tree2);
            tree2.root.data = 2;
            Run(() => Console.Write(tree.IsIdentical(tree.root, tree2.root)), "IsIdentical");

            Console.ReadLine();
        }
    }
}
