class Tree
{
    constructor(x,y)
	{
		this.x=x;
		this.y=y;
		
		this.image=loadImage("images/tree.png")
		
		this.body=Bodies.rectangle(x,y,450,10,{isSatic:true});
		World.add(world, this.body)
		
	}
	display()
	{
			push()
			fill(255)
			imageMode(CENTER);
			pop()
			
	}

}
