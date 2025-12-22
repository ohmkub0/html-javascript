class Animal {
    private name: string;
   
    public constructor(theName: string) {
      this.name = theName;
    }
   
    protected move(distanceInMeters: number) {
      console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
 }