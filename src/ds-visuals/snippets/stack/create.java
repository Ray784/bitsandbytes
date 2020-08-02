	void createStack(int ... arg){



		this.top = -1

		for(int i = 0; i < arg.length; i++)
			this.push(arg[i]);
		
		return;
	}